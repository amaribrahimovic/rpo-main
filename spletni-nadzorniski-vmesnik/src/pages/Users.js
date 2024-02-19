import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import Logo from '../res/titleless-logo.png'
import '../css/users.css'
import { useNavigate } from 'react-router-dom'

//Icons
import ProfileWhite from '../res/profile-white.png'
import EyeWhite from '../res/eye-white.png'
import PencilWhite from '../res/pencil-white.png'
import RemoveWhite from '../res/remove-white.png'
import SecondaryButton from '../components/SecondaryButton'

//Firebase
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { app, auth } from '../firebase'
import { getAuth, EmailAuthProvider, deleteUser as deleteAuthUser, reauthenticateWithCredential, updateEmail} from 'firebase/auth';
import { getDatabase, ref, get, remove, set } from 'firebase/database'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    height: '70%',
    background: '#0033FF',
    color: "#fff",
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '50px',
    border: 'none'
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)'
  }
};

const Users = () => {
  const navigate = useNavigate();

  const user = auth.currentUser;

  if (user) {
    console.log("User signed in");
  } else {
    navigate("/login");
  }

  const [nonAdminUsers, setNonAdminUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const usersRef = ref(db, 'uporabnik');

        const snapshot = await get(usersRef);
        const usersData = snapshot.val();

        const nonAdminUsers = Object.entries(usersData)
          .filter(([userId, userData]) => !userData.admin)
          .map(([userId, userData]) => ({ id: userId, ...userData }));

        setNonAdminUsers(nonAdminUsers);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const openModal2 = (user) => {
    setSelectedUser(user);
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setSelectedUser(null);
    setIsModalOpen2(false);
  };

  const openModal3 = (user) => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  const deleteUser = async (userId, email) => {
    try {

      const db = getDatabase();
      const userRef = ref(db, `uporabnik/${userId}`);

      await remove(userRef);

      setNonAdminUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

      if (selectedUser && selectedUser.id === userId) {
        closeModal();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      const userData = {
        email: userCredential.user.email,
      };
      const db = getDatabase();
      await set(ref(db, `uporabnik/${userId}`), userData);
      const updatedUserSnapshot = await get(ref(db, `uporabnik/${userId}`));
      const updatedUser = { id: userId, ...updatedUserSnapshot.val() };

      setNonAdminUsers((prevUsers) => [...prevUsers, updatedUser]);
    } catch (error) {
      console.log(error.code, ' ', error.message);
    } finally {
      setNewUserEmail('');
      setNewUserPassword('');
      closeModal3();
    }
  };

  // Ne dela
  const updateEmailHandler = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      const credential = EmailAuthProvider.credential(user.email, '12345678');
      await reauthenticateWithCredential(user, credential);

      await updateEmail(user, newEmail);

      const db = getDatabase();
      const userRef = ref(db, `uporabnik/${selectedUser.id}`);
      await set(userRef, { ...selectedUser, email: newEmail });

      closeModal();
    } catch (error) {
      console.error('Error updating email:', error);
    }
  };

  return (
    <>
      <div className='flex header'>
        <img src={Logo} className='icons' />
        <h2>CRUD</h2>
      </div>
      <div className="flex-c">
      {nonAdminUsers.map((user) => (
          <div className="flex profile">
            <div className="flex">
              <img src={ProfileWhite} className='icons' />
              <h3>{user.email}</h3>
            </div>
            <div className="flex">
              <img src={EyeWhite} className='icons' onClick={() => openModal(user)} />
              <img src={PencilWhite} className='icons' onClick={() => openModal2(user)} />
              <img src={RemoveWhite} className='icons' onClick={() => deleteUser(user.id)}/>
            </div>
          </div>
        ))}
        <SecondaryButton className="btn" handlerFunction={openModal3}>Create</SecondaryButton>
        <br />

        <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} shouldCloseOnOverlayClick={true}>
        {selectedUser && (
          <div>
            <img src={ProfileWhite} className='icons' style={{width: "124px", height: "128.17px"}} />
            <br />
            <br />
            <br />
            <h3>Uporabnik</h3>
            <br />
            <h3>{selectedUser.email}</h3>
            <br />
            <h3>Password{selectedUser.ime} {selectedUser.priimek}</h3>
          </div>
        )}
      </Modal>

      <Modal isOpen={isModalOpen2} onRequestClose={closeModal2} style={customStyles} shouldCloseOnOverlayClick={true}>
        {selectedUser && (
          <div>
            <img src={ProfileWhite} className='icons' style={{width: "124px", height: "128.17px"}} />
            <br />
            <br />
            <h3>Uporabnik</h3>
            <br />
            <h3>{selectedUser.email}</h3>
            <br />
            <input
              type="email"
              id="newEmail"
              placeholder='New Email'
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              style={{width: '50%'}}
            />
            <br />
            <h3>Password{selectedUser.ime} {selectedUser.priimek}</h3>
            <br />
            <button onClick={updateEmailHandler} style={{background: '#fff', color: '#0033FF', width: '50%'}}><strong>Update</strong></button>
          </div>
        )}
      </Modal>

      <Modal isOpen={isModalOpen3} onRequestClose={closeModal3} style={customStyles} shouldCloseOnOverlayClick={true}>
        {(
          <div>
            <img src={ProfileWhite} className='icons' style={{width: "124px", height: "128.17px"}} />
            <br />
            <br />
            <h3>Uporabnik</h3>
            <br />
            <input
              type="email"
              id="newUserEmail"
              placeholder='Email'
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              style={{width: '50%'}}
            />
            <br />
            <br />
            <input
              type="text"
              id="newUserPassword"
              placeholder='Password'
              value={newUserPassword}
              onChange={(e) => setNewUserPassword(e.target.value)}
              style={{width: '50%'}}
            />
            <br />
            <button onClick={() => createUser(newUserEmail, newUserPassword)} style={{background: '#fff', color: '#0033FF', width: '50%'}}><strong>Create</strong></button>
          </div>
        )}
      </Modal>
      </div>
    </>
  )
}

export default Users
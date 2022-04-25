import React, { useState } from 'react';
import ConnectModal from './components/ConnectModal';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './utils/firebase.config';
import CreatePost from './components/CreatePost';

function App() {
	const [user, setUser] = useState(null);

	// >> manage the user Auth status
	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	// >> manage the logout
	const logOutHandler = async () => {
		await signOut(auth);
	};

	return (
		<div>
			<div className='app-header'>
				{user && (
					<div className='user-infos'>
						<span>{user?.displayName[0]}</span>
						<h4>{user?.displayName}</h4>
						<button onClick={logOutHandler}>
							<i className='fa-solid fa-arrow-right-from-bracket'></i>
						</button>
					</div>
				)}

				{user ? <CreatePost /> : <ConnectModal />}
			</div>
			<div className='post-container'></div>
		</div>
	);
}

export default App;

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import User from '../../types/user';

export default function Friends({ localUser, users }: any) {

    function toggleFriends() {
        const friendsContent = document.getElementById('friendsContent');
        const toggleButtonDownIcon = document.getElementById('toggleButtonDownIcon');
        const toggleButtonUpIcon = document.getElementById('toggleButtonUpIcon');

        if (friendsContent && toggleButtonDownIcon && toggleButtonUpIcon) {
            if (friendsContent.style.display === 'none') {
                friendsContent.style.display = 'flex';

                toggleButtonUpIcon.style.display = 'flex';
                toggleButtonDownIcon.style.display = 'none';
            } else {
                friendsContent.style.display = 'none';

                toggleButtonUpIcon.style.display = 'none';
                toggleButtonDownIcon.style.display = 'flex';
            }
        }
    }

    return (
        <section className='friends'>
            <div className='friendsHeader'>
                <span className='friendsTitle'>Meus Amigos</span>
                <button className='toggleButton' onClick={toggleFriends}>
                    <ChevronDownIcon id='toggleButtonDownIcon' />
                    <ChevronUpIcon id='toggleButtonUpIcon' />
                </button>
            </div>
            <div className='friendsContent' id='friendsContent'>
                {users.length > 0 && (
                    users.filter((user: User) => localUser.user !== user.user).map((user: User) => (
                        <div className='friend' key={user.id}>
                            <img src={user.profile_photo} alt='Friend' className='friendUserIcon' />
                            <span className='friendName' key={user.id}>
                                {user.name}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
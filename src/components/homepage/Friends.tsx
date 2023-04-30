import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import User from '../../api/models/user';

export default function Friends({ localUser, posts, users }: any) {

    // handler triggered when clicking toggle friends button
    function toggleFriends() {
        const friendsContent = document.getElementById('friendsContent');
        const toggleButtonDownIcon = document.getElementById('toggleButtonDownIcon');
        const toggleButtonUpIcon = document.getElementById('toggleButtonUpIcon');

        if (friendsContent && toggleButtonDownIcon && toggleButtonUpIcon) {
            if (friendsContent.style.display === 'none') {
                // shows element if hidden
                friendsContent.style.display = 'flex';

                // inverts button icon display
                toggleButtonUpIcon.style.display = 'flex';
                toggleButtonDownIcon.style.display = 'none';
            } else {
                // hides element if shown
                friendsContent.style.display = 'none';

                // inverts button icon display
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
                    users.filter((user: User) => localUser.user !== user.user).map((user: {
                        name: string; user: string; profile_photo: string
                    }) => (
                        <div className='friend' key={user.user}>
                            <img src={user.profile_photo} alt='Friend' className='friendUserIcon' />
                            <span className='friendName' key={user.user}>
                                {user.name}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
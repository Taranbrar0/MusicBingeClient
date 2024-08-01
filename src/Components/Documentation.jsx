import React from "react";
import { useNavigate } from "react-router-dom";
function Documentation({setLoading}) {
    const navigate = useNavigate();

    return(
        <div className="p-3">
            <h1 className="bg-green-500 text-black w-16 p-2 rounded cursor-pointer text-bold" onClick={()=>{navigate('/')}}>Close</h1>
          <h1 className="text-4xl my-3">Sound Player Website Documentation</h1>
          <section>
            <h2 className="text-2xl my-3">Overview</h2>
            <p>
              This documentation provides a comprehensive guide for the Sound Player website, 
              which features functionalities such as user authentication, music playback control, 
              and user account management. The website uses Context API to manage the state of the 
              currently playing song, and the <code>useState</code> hook to handle user authentication status. 
              Notifications are implemented using <code>react-toastify</code>.
            </p>
          </section>
    
          <section>
            <h2 className="text-3xl my-3">Features</h2>
            <h3 className="text-2xl my-3">Styling</h3>
            <ul>All the Styling is done by tailwind css</ul>
            
            <h3 className="text-2xl my-3">User Authentication</h3>
            <ul>
              <li><strong>Authentication State</strong>: The <code>useState</code> hook is used to track if a user is authenticated. If the user is not authenticated, they are redirected to the login page.</li>
              <li><strong>Notifications</strong>: <code>react-toastify</code> is utilized to show notifications, such as successful login or logout messages.</li>
            </ul>
            
            <h3 className="text-2xl my-3">Audio Control</h3>
            <ul>
              <li><strong>AudioControl Component</strong>: This component provides controls to play the next or previous track and allows changing the playing time via a progress bar.</li>
              <li><strong>Song Details</strong>: Song details are fetched from an Express server using Axios and displayed on the right side of the AudioControl component.</li>
              <li><strong>User Info</strong>: The user’s name and icon are displayed on the right side. Clicking on them opens a new component showing the user’s details with an option to delete the account.</li>
            </ul>
            
            <h3 className="text-2xl my-3">Navigation and Playlists</h3>
            <ul>
              <li><strong>Sidebar Navigation</strong>: Clicking on "My Music" displays the songs liked by the user, with liked song IDs stored in local storage. The details are fetched from a REST API.</li>
              <li><strong>Main Component</strong>: Displays the default component with playlist details fetched from the API.</li>
            </ul>
            <h3 className="text-2xl my-3">Local Storage </h3>
            <ul><strong>Local Storage</strong> is used to store name of user , An token which is used for Authentication and an array of liked Songs on loggin out Local Storage gets Clear.</ul>
          </section>
    
          <section>
            <h2 className="text-2xl my-3">Server Endpoints</h2>
            <ul>
              <li><strong>Login</strong>: Handles user login.</li>
              <li><strong>Signup</strong>: Handles user registration.</li>
              <li><strong>Albums</strong>: Fetches album data.</li>
              <li><strong>Songs</strong>: Fetches song data.</li>
              <li><strong>User</strong>: Manages user data.</li>
              <li><strong>User Details Storage</strong>: User details are stored in a text file. On signup or account deletion, changes are made to this file using Node.js <code>fs</code>.</li>
            </ul>
          </section>
    
          <section>
            <h2 className="text-2xl my-3">Loader</h2>
            <p>
              Loader screen will when user navigate to home page for 2 seconds nodes are used by unicode and they are styled by css and an animation is top on that which bounces there position on y-axis. 
            </p>
          </section>
          <section >
            <h1 className="text-3xl my-3">Music Copyright Free Attributes</h1>
            <ul className="list-disc pl-5 text-blue-800">
                <li>
                    Music by <a href="https://pixabay.com/music/future-bass-leonell-cassio-chapter-two-ft-carrie-114909/" target="_blank" rel="noopener noreferrer">Leonell Cassio from Pixabay</a>
                </li>
                <li>
                    Music by: <a href="https://www.bensound.com/royalty-free-music/track/dreams-chill-out" target="_blank" rel="noopener noreferrer">Bensound.com</a> (License code: UHY19OINXEFQYCXI) - <i>Dreams</i> by Benjamin Tissot
                </li>
                <li>
                    Royalty Free Music: <a href="https://www.bensound.com/royalty-free-music/track/yesterday-shiny-relaxing" target="_blank" rel="noopener noreferrer">Bensound.com</a> (License code: KW7L5YSAGUDKHS4I) - <i>Yesterday</i> by Aventure
                </li>
                <li>
                    Royalty Free Music: <a href="https://www.bensound.com/royalty-free-music/track/moonlight-background-music" target="_blank" rel="noopener noreferrer">Bensound.com</a> (License code: AK8QNGRUGWWCTRD9) - <i>Moonlight</i> by Yunior Arronte
                </li>
                <li>
                    Music by: <a href="https://www.bensound.com/royalty-free-music/track/keep-it-real-positive-energetic" target="_blank" rel="noopener noreferrer">Bensound.com</a> (License code: 7UCFJTPROF5MYDV9) - <i>Keep It Real</i> by Nick Petrov
                </li>
                <li>
                    Music by <a href="https://pixabay.com/music/future-bass-titanium-170190/" target="_blank" rel="noopener noreferrer">Alisia</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=170190" target="_blank" rel="noopener noreferrer">Pixabay</a>
                </li>
                <li>
                    Music by <a href="https://pixabay.com/music/trap-baby-mandala-nepalese-drill-music-169039/" target="_blank" rel="noopener noreferrer">Praz Khanal</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=169039" target="_blank" rel="noopener noreferrer">Pixabay</a>
                </li>
                <li>
                    Music by <a href="https://pixabay.com/music/acoustic-group-inside-you-162760/" target="_blank" rel="noopener noreferrer">Vitaliy Levkin</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162760" target="_blank" rel="noopener noreferrer">Pixabay</a>
                </li>
                <li>
                    Music by <a href="https://pixabay.com/music/beats-tuesday-glitch-soft-hip-hop-118327/" target="_blank" rel="noopener noreferrer">Amaksi</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=118327" target="_blank" rel="noopener noreferrer">Pixabay</a>
                </li>
            </ul>

            <h2 className="text-2xl my-3">Song Cover Pictures</h2>
            <ul className="list-disc pl-5 text-blue-800">
                <li>
                    Photo by <a href="https://www.pexels.com/photo/two-towers-among-trees-23999400/" target="_blank" rel="noopener noreferrer">Borys Jarzcuk</a>
                </li>
                <li>
                    Photo by <a href="https://www.pexels.com/photo/dream-text-on-green-leaves-1535907/" target="_blank" rel="noopener noreferrer">Karyme França</a>
                </li>
                <li>
                    Photo by <a href="https://www.pexels.com/photo/purple-flower-plants-in-the-garden-5864428/" target="_blank" rel="noopener noreferrer">Neron Photos</a>
                </li>
                <li>
                    Photo by <a href="https://www.pexels.com/photo/full-moon-746111/" target="_blank" rel="noopener noreferrer">Samer Daboul</a>
                </li>
                <li>
                    Photo by <a href="https://www.pexels.com/photo/face-of-woman-with-blue-eyes-4173867/" target="_blank" rel="noopener noreferrer">Erik Mclean</a>
                </li>
                <li>
                    Photo by <a href="https://unsplash.com/photos/an-aerial-view-of-a-valley-in-the-mountains-yeLp8cX1BP4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Tomáš Malík on Unsplash</a>
                </li>
                <li>
                    Photo by <a href="https://www.pexels.com/photo/the-famous-motherland-monument-11041192/" target="_blank" rel="noopener noreferrer">Zeynep Elif Özdemir</a>
                </li>
                <li>
                    Photo by <a href="https://www.pexels.com/photo/blooming-roses-placed-on-table-near-window-in-room-7947304/" target="_blank" rel="noopener noreferrer">Nida Kurt</a>
                </li>
                <li>
                    Photo by <a href="https://www.pexels.com/photo/glitchy-colorful-abstract-art-11774159/" target="_blank" rel="noopener noreferrer">Mathias Reding</a>
                </li>
            </ul>

            <h2 className="text-2xl my-3">Cover Photo on Top Container</h2>
            <p className="text-blue-800">
                Photo by <a href="https://unsplash.com/photos/woman-wearing-black-pullover-hoodie-E3DxfNXPE8k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Noah Buscher on Unsplash</a>
            </p>
        </section>
        </div>

    )
};

export default Documentation;
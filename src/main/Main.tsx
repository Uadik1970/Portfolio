import React from 'react'
import container from '../common/styles/Container.module.css'
import s from './Main.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${container.container} ${s.mainBlockContainer}`}>
                <div className={s.greetings}>
                    <h1>Hi, I'm Vadim Timofeev</h1>
                    <h3>A Frontend Developer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo ex, elementum vitae neque ut, convallis tincidunt sapien. Nulla facilisi. Curabitur euismod velit quis egestas suscipit. Nunc fermentum convallis erat, vel imperdiet mi convallis id. Cras facilisis quam nec ex tincidunt iaculis. Integer ut velit eleifend quam auctor dictum. Duis varius a mauris eget congue.
                    </p>
                    <div className={s.mainBlockContacts}>
                        <a href="https://www.linkedin.com/in/vadim-timofeev-54303b216/"
                            target="_blank"
                            title="Linkedin"
                        >
                            <svg
                                fill="#ededed"
                                height="50px"
                                width="50px"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-143 145 512 512">
                                <path
                                    d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7
	c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6
	c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1
	c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"
                                />
                            </svg>
                        </a>
                        <a
                            href="mailto:uadik1970@gmail.com"
                            target="_blank"
                            title="Gmail"
                        >
                            <svg fill="#ededed" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 216 216" >
                                <path d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498
	L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616
	l49.374-39.276V156z"/>
                            </svg>
                        </a>
                        <a href="https://t.me/VadimTim92"
                            title="Telegram"
                            target="_blank"
                        >
                            <svg
                                fill="#ededed"
                                height="50px"
                                width="50px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 242.667 242.667" >
                                <path
                                    d="M162.443,86.061l-54.044,50.235c-1.899,1.765-3.126,4.135-3.473,6.704l-1.839,13.641c-0.245,1.82-2.806,2.003-3.308,0.237
	l-7.08-24.875c-0.808-2.839,0.37-5.87,2.883-7.418l65.484-40.334C162.241,83.528,163.454,85.121,162.443,86.061z M242.667,0v242.667
	H0V0H242.667z M188.665,58.301l-137.51,53.047c-3.39,1.308-3.364,6.114,0.04,7.385L84.7,131.24l12.97,41.708
	c0.831,2.671,4.099,3.656,6.267,1.888l18.677-15.226c1.958-1.596,4.744-1.674,6.788-0.19l33.689,24.459
	c2.319,1.684,5.604,0.414,6.187-2.392l24.675-118.699C194.59,59.727,191.583,57.175,188.665,58.301z"/>
                            </svg>
                        </a>

                        <a
                            href="https://github.com/Uadik1970"
                            target="_blank"
                            title="Github"
                        >
                            <svg
                                fill="#ededed"
                                height="50px"
                                width="50px"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-143 145 512 512" >
                                <g>
                                    <path
                                        d="M-143,145v512h512V145H-143z M244.2,423.4c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7
		c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3
		c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9
		c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2
		c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5
		C243,374.6,247.3,398.2,244.2,423.4z"/>
                                    <path
                                        d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6
		c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1
		c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z
		 M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2
		C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2
		c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={s.photo}>
                </div>

            </div>
        </div >
    )
}

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';
import {facebook, instagram, linkedin} from '../assets'

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footerbar}>
        <div>Rohit</div>
        <div className={styles.iconcontainer}>
          <Link href="#">
          <Image src={facebook} alt="facebook" width={25} height={25}/>
          </Link>
          <Link href="#">
          <Image src={instagram} alt="instagram" width={25} height={25}/>
          </Link>
          <Link href="#">
          <Image src={linkedin} alt="linkedin" width={25} height={25} className={styles.footericon}/>
          </Link>
        </div>
      </div>
      <hr />
      <div className={styles.footerbar}>
        <div>
        {['home', 'about', 'project', 'item2', 'item2'].map((item) => (
          <li key={item}>
            <Link href={`#`}>
              {item}
            </Link>
          </li>
          ))}
        </div>
        <div>
        {['home', 'about', 'project', 'item2', 'item2'].map((item) => (
          <li key={item}>
            <Link href={`#`}>
              {item}
            </Link>
          </li>
          ))}
        </div>
        <div>
        {['home', 'about', 'project', 'item2', 'item2'].map((item) => (
          <li key={item}>
            <Link href={`#`}>
              {item}
            </Link>
          </li>
          ))}
        </div>
        <div>
        {['home', 'about', 'project', 'item2', 'item2'].map((item) => (
          <li key={item}>
            <Link href={`#`}>
              {item}
            </Link>
          </li>
          ))}
        </div>
        
        <div className={styles.footermail}>
          <input type="text" placeholder='Email' />
          <button className='btnsubmit'>Subscribe</button>
        </div>
      </div>
      <div className={styles.copyrightsection}>
        <p>Copyright</p>
        <p>Terms & conditions</p>
      </div>
    </div>
  )
}

export default Footer

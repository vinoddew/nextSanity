import {client, urlFor} from '../client'
import styles from '../styles/Home.module.css'

export default function Player(props) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {/* <h3 className={styles.title}>
          This page is about {props?.name}
        </h3> */}

        <div className={styles.detail}>
        <a>
                <img src={urlFor(props?.mainImage).url()} className={styles.detailImage}/>
                <h2>{props?.name} &rarr;</h2>
                <p>{props?.description}</p>
              </a>
        </div>
      </main>
    </div>
  )
}

// const searchParams = new URLSearchParams(window.location.search)
//     const pname = searchParams.get('pname')
Player.getInitialProps = async function(context) {
    
  const { pname = '' } = context.query
  return await client.fetch(`
  *[_type == "player" && name == $pname][0]{name,mainImage,description,game}
  `, { pname })
}

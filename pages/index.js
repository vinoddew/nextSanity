import {client, urlFor} from '../client'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const router = useRouter()
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          World of sports and players
        </h1>

        <div className={styles.grid}>
          {
            Object.values(props).map((item,i) => (
              <a onClick={() => router.push({
                pathname: '/player',
                query: { pname: item.name },
              })} className={styles.card} key={i}>
                <img src={urlFor(item?.mainImage).width(250).height(150).url()}/>
                <h2>{item?.name} &rarr;</h2>
                <p>{item?.description}</p>
              </a>
            ))
          }
        </div>
      </main>
    </div>
  )
}


Home.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
  *[_type == "player"]{name,mainImage,description,game}
  `, { slug })
}

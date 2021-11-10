import {client, urlFor} from '../client'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  // props = Array.from(props)
  console.log(Object.values(props),"@@@@@@@@@@@@@@@@@@@@@@@@@@")
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          World of sports and players
        </h1>

        <div className={styles.grid}>
          {
            Object.values(props).map((item,i) => (
              <a href="https://nextjs.org/docs" className={styles.card} key={i}>
                <img src={urlFor(item?.mainImage).width(250).height(150).url()}/>
                <h2>{item?.name} &rarr;</h2>
                <p>{item?.description}</p>
              </a>
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
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

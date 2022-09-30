export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/reviews/best-minecraft-server-hosting-(2022-ranked)',
      permanent: true,
    },
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function minecraft() {
  return(
    <></>
  )
}
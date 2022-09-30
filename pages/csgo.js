export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/reviews/best-cs:go-server-hosts-(2022-ranked)',
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
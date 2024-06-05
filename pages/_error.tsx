import { NextResponse } from 'next/server'

function Error({ statusCode }: { statusCode: number }) {
  console.log('Error: ', statusCode)
  return (
    <p>
      {statusCode === 404
        ? 'Page Not Found...'
        : statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: { res: NextResponse; err: any }) => {
  const statusCode = res ? res.status : err ? err.status : 404
  return { statusCode }
}

export default Error

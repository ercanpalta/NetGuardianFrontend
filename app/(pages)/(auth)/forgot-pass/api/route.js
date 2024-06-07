export async function POST(request) {

    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    const res = await fetch(`http://localhost:8080/users/forgetpassword?email=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }
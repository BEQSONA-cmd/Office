
export default function Contact() 
{
    return (

      <article id="contact" className="wrapper style4 py-16 bg-gray-900">
      <div className="container mx-auto">
        <header>
          <h2 className="text-3xl font-semibold">Don't hesitate to reach out.</h2>
          <p>Please enter your email, phone number, or any other contact information so I can get back to you with an answer.</p>
        </header>
        <form className="w-full flex flex-wrap" method="post" action="/send">

          <div className="w-full md:w-1/2 p-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full bg-gray-800 border p-2 rounded-lg"
              required
            />

          </div>
          <div className="w-full md:w-1/2 p-4">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Phone Number / Email"
              className="w-full bg-gray-800 border p-2 rounded-lg"
              required
            />

          </div>
          <div className="w-full p-4">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-full bg-gray-800 border p-2 rounded-lg"
              required
            ></textarea>

          </div>
          <div className="w-full flex justify-start p-4">
            <button type="send" className="shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
              Send Message
            </button>
            <button type="reset" className="ml-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
              Clear Form
            </button>
          </div>
          
        </form>
      </div>
    </article>
    );
  }
  
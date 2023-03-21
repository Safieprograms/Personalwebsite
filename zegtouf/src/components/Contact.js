const Contact = () => {
  return ( 
    <section className="contact" id="contact">
      <div className="container reach">
        <div className="title">
          <div className="yellow-line top-4 left-[calc(-50%-20px)] w-[50%]"></div>
          <h1>reach me out :</h1>
        </div>
        <form action="" method="post">
          <div className="grid  gap-5 grid-cols-12 carea">
            <div className="col-span-12 lg:col-span-6">
              <textarea placeholder="Write your message here"></textarea>
            </div>
            <div className="grid grid-cols-12 gap-5 col-span-12 lg:col-span-6">
              <div className="col-span-6">
                <input type="text" placeholder="First name" />
              </div>
              <div className="col-span-6">
                <input type="text" placeholder="Last name" />
              </div>
              <div className="col-span-12">
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="col-span-6">
                <button>Decline</button>
              </div>
              <div className="col-span-6">
                <button className="sent">Sent</button>

              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
 
export default Contact;
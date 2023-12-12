const Qna = () => {
  return (
    <div className="md:flex my-12 m-2">
      
      <div className="flex-1 space-y-3">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
        What is Marketeers Hub?
        </div>
        <div className="collapse-content">
          <p>Marketeers Hub is an online platform that connects clients with freelance professionals. It allows clients to post projects, and freelancers can bid on those projects based on their skills and expertise.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How do I get started on Marketeers Hub?
        </div>
        <div className="collapse-content">
          <p>To get started, sign up for an account, complete your profile, and either post a job or start bidding on available projects that match your skills.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Can I edit or close a project after posting it?
        </div>
        <div className="collapse-content">
          <p>Yes, you can manage your posted projects in the My Posted Jobs section. From there, you can edit the details or close a project that is no longer active.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Can I have multiple projects or bids simultaneously?
        </div>
        <div className="collapse-content">
          <p>Yes, both clients and freelancers can manage multiple projects or bids concurrently. Simply use the My Posted Jobs and My Bids sections to keep track of your activities.</p>
        </div>
      </div>
      </div>
      <div className="flex-1 hidden md:block">
        <img src="https://i.ibb.co/Q8BKkSp/Qna-61.jpg" alt="" />
      </div>
    </div>
  );
};

export default Qna;

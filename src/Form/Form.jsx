import "./Form.scss"

export default function Form({ handleSubmit }) {
  return (
    <div className="Form">
      <h2>Add user</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full name</label>
          <input type="text" id="full_name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="description">About me</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="...description">
          </textarea>
        </div>
        <div>
          <input type="submit" value="Add user" />
        </div>
      </form>
    </div>
  );
}
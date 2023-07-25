export default function Notes(props) {
  return (
    <div class="form-group shadow-textarea notesdiv">
      <label for="exampleFormControlTextarea6 label">
        Place for your notes...
      </label>
      <textarea
        value={props.value}
        onChange={props.onCHange}
        autoFocus
        className="form-control z-depth-1 notes"
        id="exampleFormControlTextarea6"
        rows="3"
        placeholder="Notes..."
      ></textarea>
    </div>
  );
}

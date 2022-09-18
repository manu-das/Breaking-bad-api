function Card(props) {
  return (
    <div className="col-lg-3">
      <div className="card text-white" key={props.id}>
        <img src={props.img} className="card-img" height="280px" alt="" />
        <div class="card-body">
          <h4 className="card-title mt-2">{props.name}</h4>
          <p>Nickname- {props.nickname}</p>
          <hr></hr>
          <div class="d-flex justify-content-around align-items-center">
            <p>Status - </p>
            <p>{props.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

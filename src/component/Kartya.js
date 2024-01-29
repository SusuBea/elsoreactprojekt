export default function Kartya(props){

    function kattintas(){
        console.log(props.obj.id)
        props.katt(props.obj.id)

    }

    return(
        <div className="card col-sm-6">
      <div className="card-header">
      <h3> {props.obj.nev} </h3>
      </div>
      <div className="card-body">
       <img className= 'img-thumbnail' src={props.obj.img} alt="" />
      
       </div>
       <span>A kutya kora: {props.obj.kor} éves</span>
      <div className="card-footer">
      <button type="button" onClick={kattintas} className="btn btn-success">Vigyél haza</button>
      </div>
    </div>
    )
}
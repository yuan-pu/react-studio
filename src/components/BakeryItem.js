// TODO: create a component that displays a single bakery item

export default function bakeryItem(item) {
    return (
        <div className="row">
            <div className="card">
                <img src={item.image} alt={'Photo of ' + item.name} style={{width:400, height:400}}/>
                <div className="container">
                    <h4><b>{item.name}</b></h4>
                    <p>{item.description}</p>
                </div>
            </div>
        </div> 
      );
}
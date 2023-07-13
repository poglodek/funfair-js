

export function ErrorList({ list }) {

    if (list == null) {
        return ('');
    }

    if (!Array.isArray(list)) {
        return ('');
    }

    if(list.length === 0){
        return('');
    }
    
    if(list.length === 1 && list[0] === ''){
        return('');
    }


    return (<div>
        <br />
        <p className="text-red-500 font-bold">We've found following problems:</p>

        <ul>
            {list.map((element, index) => (
                <li className="text-red-500" key={index}>{element}</li>
            ))}
        </ul>


    </div>);

}


const Container = ({children, myValue}) => {

    return (
        <div>
            <h2>Este e o titulo do container</h2>
            {children}
            <p>Este e o valor de {myValue}</p>
        </div>

    );

};

export default Container;
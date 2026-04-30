function StudentInfo(props){
    const fname="Dhiraj";
    
    return<>{props.studentList.map((item, index) => (
                <div key={index} style={{ border: '1px solid white', margin: '10px', padding: '10px' }}>
                    <h1>Name: {item.name}</h1>
                    <h1>Age: {item.age}</h1>
                    <h1>Course: {item.course}</h1>
                </div>
            ))}
    </>


}
export default StudentInfo
import './App.css';
import Main from './Components1/Main';
import List from './Components2/List';
function App() {
  return (
    <div className="">
      <table>
        <tbody>
        <tr class="headdiv">
        <th>Mooose</th>
        <th>Funfacts</th>
       </tr>
    <tr>
   <td>
    <img style={{width:"550px",margin:"20px"}} src="https://images.unsplash.com/photo-1549471013-3364d7220b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="Moose"></img>
    </td> 
      <td> <p>My name is Sarah, and my favorite animal is the moose. They can be up to 6.5 feet tall and weigh 1200 pounds. Surprisingly, they're really good at swimming!</p> 
       <p>If you want to learn more about the moose, check this out <a href="https://en.wikipedia.org/wiki/Moose">Wikipedia page</a> .</p> <p></p></td>
    </tr>
    </tbody>
    </table>

    <div class = "main2">
     <Main/>
     <List/>
    </div>
   
        
    </div>
  );
}

export default App;

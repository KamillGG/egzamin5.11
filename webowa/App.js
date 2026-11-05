import { useState } from 'react';
import './App.css';
function App() {
  const [checkedData, setCheckedData] = useState({kwiaty:true, zwierzeta:true, samochody:true})
  const [galeryElements, setGaleryElements] = useState([
     {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
  ])
//**********************************************
// nazwa metody: AddDownloadNumber
// opis metody: dodaje ilość pobrań do danego obrazu
// parametry: item - wybrany obraz
// zwracany typ i opis: brak
// autor: 012345678910
// ***********************************************
  const AddDownloadNumber = (item)=>{
    const elementToChange = {...item, downloads: item.downloads+1}
    const tempArray = []
    galeryElements.forEach(element => {
      if(element.id==elementToChange.id){
        tempArray.push(elementToChange)
      }
      else{
        tempArray.push(element)
      }
    });
    setGaleryElements(tempArray)
  }
  return (
    <div className="App">
      <h1>Kategorie zdjęć</h1>
      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:'10px'}}>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="kwiaty-switch" checked={checkedData.kwiaty} onChange={()=>{setCheckedData({...checkedData, kwiaty:!checkedData.kwiaty})}}/>
      <label className="form-check-label" htmlFor="kwiaty-switch">Kwiaty</label>
      </div>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="zwierzeta-switch" checked={checkedData.zwierzeta} onChange={()=>{setCheckedData({...checkedData, zwierzeta:!checkedData.zwierzeta})}}/>
      <label className="form-check-label" htmlFor="zwierzeta-switch">Zwierzęta</label>
      </div>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="samochody-switch" checked={checkedData.samochody} onChange={()=>{setCheckedData({...checkedData, samochody:!checkedData.samochody})}}/>
      <label className="form-check-label" htmlFor="samochody-switch">Samochody</label>
      </div>
      </div>
      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
        {galeryElements.map((item)=>(
          ((item.category==1 && checkedData.kwiaty) || (item.category==2 && checkedData.zwierzeta) || (item.category==3 && checkedData.samochody)) &&
          <div key={item.id}>
          <img src={`/assets/${item.filename}`}  alt={item.alt} width={300} height={200} style={{margin:'5px', borderRadius:"5px"}}/>
          <h4>Pobrań: {item.downloads}</h4>
          <button type="button" className='btn btn-success' onClick={()=>{AddDownloadNumber(item)}}>Pobierz</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

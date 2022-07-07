import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuoteForm from './Forms/QuoteForm';
import UpdateData from './EventHandler/UpdateEvent';

const Update = () => {
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [quoteCategory, setQuoteCategory] = useState("")
	const [date, setDate] = useState("");
	const objectId = useParams();
	const navigation = useNavigate()
	const quotes = useSelector(state => state)

	console.log(quotes)
	const updateId = quotes.length > 0 ? quotes.filter(item => item._document.data.value.mapValue.fields.uniqueId.stringValue === objectId.id) : ""

	useEffect(() => {
		if (updateId) {
			setName(updateId[0]._document.data.value.mapValue.fields.Name.stringValue)
			setTitle(updateId[0]._document.data.value.mapValue.fields.Title.stringValue)
			setDescription(updateId[0]._document.data.value.mapValue.fields.Description.stringValue)
			setQuoteCategory(updateId[0]._document.data.value.mapValue.fields.QuoteCategory.stringValue)
			setDate(updateId[0]._document.data.value.mapValue.fields.date.stringValue)
		}
	}, [])


	return (
		<div>
			<QuoteForm name={name} title={title} description={description} quoteCategory={quoteCategory} date={date}
				setName={setName} setTitle={setTitle} setDescription={setDescription} setQuoteCategory={setQuoteCategory} setDate={setDate}
				onSubmit={(event) => { UpdateData(event,objectId,name,title,description,quoteCategory,date,navigation) }} />
		</div>
	);
}

export default Update
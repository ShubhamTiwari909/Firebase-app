import InputGroup from './InputGroup'
import SelectGroup from './SelectGroup'
import ButtonGroup from './ButtonGroup'

function QuoteForm({FormTitle, title, name, description, quoteCategory, date, setTitle, setName, setDescription, setQuoteCategory, setDate, onSubmit }) {
    return (

        <div className="grid place-content-center">
            <div className="my-10">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-2xl my-5">{FormTitle}</h2>
                <form className="w-full max-w-sm" onSubmit={onSubmit}>
                    <InputGroup labelName={`Title`} value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                    <InputGroup labelName={`Written By`} value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    <InputGroup labelName={`Description`} value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
                    <SelectGroup labelName={`Category`} value={quoteCategory} onChange={(e) => setQuoteCategory(e.target.value)} />
                    <InputGroup labelName={`Date`} value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                    <ButtonGroup addButtonName={`Add`} cancelButtonName={`cancel`} />
                </form>
            </div>

        </div>
    )
}

export default QuoteForm
import { useEffect } from "react";

function CurrencyBox({labelValue,classname="",amount,onAmountChange,selectCurrency,selectCurrencyChange, currencyOptions=[]}){

    return(
        <>
        <div className={`flex justify-between items-center p-4 bg-white rounded-md gap-[300px] ${classname}`}>
            <div className="flex flex-col items-start gap-4">
                <label htmlFor="amountInput">{labelValue}</label>
                <input type="number" value={amount} id="amountInput" className="w-[150px]"  onChange={(e)=>{
                    onAmountChange && onAmountChange(Number(e.target.value))
                }}/>
            </div>
            <div className="flex flex-col items-start gap-4">
                <label htmlFor="currencySelect">Currency Type</label>
                <select name="" id="currencySelect"  className="pr-3 rounded-md bg-slate-300"value={selectCurrency} onChange={(e)=>{
                    selectCurrencyChange && selectCurrencyChange(e.target.value)
                }}>
                    {currencyOptions.map((currencyValue)=>(
                    <option value={currencyValue} key={currencyValue}>{currencyValue}</option>
                    ))}
                    
                </select>
            </div>
        </div>
        </>
    )

}
export default CurrencyBox;
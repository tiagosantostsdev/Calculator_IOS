import './Calculator.css';

export const Calculator = () => {

    return (
        <>
            <div className='Container'>
                <div className='Container_btn'>
                    <div className='display'>
                        
                    </div>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className='btn_orange'>/</button>
                    <button className='btn_gray'>7</button>
                    <button className='btn_gray'>8</button>
                    <button className='btn_gray'>9</button>
                    <button className='btn_orange'>x</button>
                    <button className='btn_gray'>4</button>
                    <button className='btn_gray'>5</button>
                    <button className='btn_gray'>6</button>
                    <button className='btn_orange'>-</button>
                    <button className='btn_gray'>1</button>
                    <button className='btn_gray'>2</button>
                    <button className='btn_gray'>3</button>
                    <button className='btn_orange'>+</button>
                    <button className='btn_zero'>0</button>
                    <button className='btn_gray'>,</button>
                    <button className='btn_orange'>=</button>
                </div>
            </div>
        </>
    )
}
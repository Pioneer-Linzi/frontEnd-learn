import * as React from 'react'
import './cssShadow.scss';

class CssShadow extends React.PureComponent {
    public render(){
        return (
        <div id='cssShadow'>
            <section>
                <h1>
                    box-shodow 模拟多边框
                </h1>
                <div className="multi-border"/>
            </section>
            <section>
                <h1>多个 box-shodow </h1>
                <div className="multi-shadow"/>
            </section>
            <section>
                <h1>多 box-shodow </h1>
                <div className="multi-shadow"/>
            </section>
        </div>
        );
    }
}
export default CssShadow;
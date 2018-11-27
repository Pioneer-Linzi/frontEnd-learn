import { connect } from 'react-redux'

function mapStateToProps (state:any){
    return {
        buffer: 20,
        completed:10
    }
}

function mapDispatchToProps (dispatch:any){
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps);


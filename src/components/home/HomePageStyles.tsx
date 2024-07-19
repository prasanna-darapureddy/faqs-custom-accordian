export const styles = {
    bgContainer:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    topContainer:{
        padding:'30px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap:3
    },
    contentContainer:{
        padding:'30px',
        display: 'flex',
        flexDirection: 'column',
        gap:3
    },
    image:{
        height:'200px',
        width:'200px',
    },
    description:{
        width:'100%',
    },
    menusContainer:{
        display: 'flex',
        gap:3,
        width:'90%',
        visibility: {xs:'scroll', md:'none'},
        overflowX:{xs:'scroll', md:'hidden'},
        padding:'10px',
    },
    menuButton:{
        textTransform: 'capitalize',
        color:'#fcb283',
        fontWeight:'bold',
    },
    activeMenuButton:{
        // borderBottom: '2px solid #e47344',
        textTransform: 'capitalize',
        color:'#e47344',
        fontWeight:'bold',
        position:"relative",
        borderRadius:'10px',
        "&::after":{
            position:"absolute",
            background:"#e47344",
            bottom:"0px",
            left:'2px',
            width:"50%",
            height:"3px",
            content:`""`,
            borderRadius:'5px',
        }
    },
    resultContainer:{
        display: 'flex',
        flexDirection: 'column',
        gap:3,
    },
    tabContentContainer:{
        width:'100%',
    },
    eachTopicItem:{
        padding:'10px',
        backgroundColor:'#f2f2f2',
        display:'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
    subContentContainer:{
        display: 'flex',
        flexDirection: 'column',
        padding:'10px',
        border:'1px solid #f2f2f2',
        gap:3
    },
    subContentItems:{
        display:'flex',
    }
}
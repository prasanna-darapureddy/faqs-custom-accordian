import { Box, Button, Typography } from '@mui/material'
import { styles } from './HomePageStyles'
import { useState } from 'react';
import { ArrowRight, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

interface IProps{
    menusList:{
        tabId:string,
        menuName :string,
    }[],
    initialContentList:{
        id:number,
        contentId: string,
        topic :string,
        subContent:{title: string,subTitle: string,}[],
        isOpened: boolean,
    }[]
}

interface IState{
    acitveMenu: string;
    isOpened: boolean;
    clickedId: number;
    contentList:{
        id:number,
        contentId: string,
        topic :string,
        subContent:{
            title: string,
            subTitle: string,
        }[],
        isOpened: boolean,
    }[],
}

function HomePage(props: IProps) {
    const {menusList, initialContentList} = props
    const [contentList, setContentList] = useState<IState['contentList']>(initialContentList)
    const [activeMenuId, setActiveMenuId] = useState<IState['acitveMenu']>(menusList[0].tabId)
    
    const onClickMenuButton = (id:string) => {
        const activeMenu = menusList.find(eachMenu => eachMenu.tabId === id)
        activeMenu && setActiveMenuId( activeMenu.tabId)        
    }

    const onClickItem = (id: number) => {       
        const updatedList = contentList.map(eachItem => {
            if(eachItem.id === id){
                return {...eachItem, isOpened: !eachItem.isOpened}
            }else{
                return eachItem
            }        
        })
        setContentList(updatedList)
    }
    
    const filteredList = contentList.filter((eachContentItem) => eachContentItem.contentId === activeMenuId)

  return (
    <>
      <Box sx={styles.bgContainer}>        
            <Box sx={styles.topContainer}>
                <Box component={'img'} src={'/img1.png'} alt='image' sx={styles.image}/>
                <Typography sx={styles.description}>
                    This unique page on your website can also help you convert website visitors by 
                    addressing their concerns or objections, alleviating any anxiety they might have about purchasing from a 
                    new online business. It's important to note that FAQ pages can benefit any type of business in any industry.
                </Typography>
            </Box>    
            <Box sx={styles.contentContainer}>
                <Box sx={styles.menusContainer}>
                    {menusList.map(eachMenuItem => 
                        <Button key={eachMenuItem.tabId} sx={activeMenuId === eachMenuItem.tabId ? styles.activeMenuButton : styles.menuButton} 
                        onClick={() => onClickMenuButton(eachMenuItem.tabId)}>{eachMenuItem.menuName}</Button>
                    )}
                </Box>
                <Box sx={styles.resultContainer}>
                    {filteredList.map((eachContentItem, index) =>
                        <Box key={eachContentItem.id} sx={styles.tabContentContainer}>
                            <Box sx={styles.eachTopicItem} onClick={() => onClickItem(eachContentItem.id)}>
                                <Typography variant='h6'>0{index+1}   {eachContentItem.topic}</Typography>
                                {eachContentItem.isOpened  ?
                                    <KeyboardArrowUp/> : <KeyboardArrowDown /> }                
                            </Box>
                            {eachContentItem.isOpened &&  
                                <Box sx={styles.subContentContainer}>
                                    {eachContentItem.subContent.map(eachContent => (
                                        <Box sx={styles.subContentItems} key={eachContent.title}>
                                            <ArrowRight />
                                            <Box>
                                                <Typography>{eachContent.title}</Typography>
                                                <Typography>{eachContent.subTitle}</Typography>
                                            </Box>
                                        </Box>
                                    ))}                                    
                                </Box>
                            }
                        </Box>
                    )}
                </Box>
            </Box>
      </Box>
    </>
  )
}
export default HomePage

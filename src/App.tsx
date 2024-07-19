import './App.css';
import HomePage from './components/home/HomePage';

const menusList = [
    {
        tabId: 'course',
        menuName: 'Course highlights',
    },
    {
        tabId: 'instructor',
        menuName: 'Instructor details',
    },
    {
        tabId: 'faq',
        menuName: "FAQ's",
    },
    {
        tabId: 'skill',
        menuName: 'Skill information',
    },
    {
        tabId: 'rating',
        menuName: 'Rating details',
    },
    {
        tabId: 'jobs',
        menuName: 'Relavant jobs',
    },
    {
        tabId: 'students',
        menuName: 'No of students enrolled',
    },
]

const initialContentList = [
    {
        id: 1,
        contentId: 'course',
        topic: 'intro',
        subContent: [{ title: 'Front End Course', subTitle: 'React Js', }, { title: 'Js', subTitle: 'Typescript', }, { title: 'CSS', subTitle: 'MUI', }],
        isOpened: false,
    },
    {
        id: 2,
        contentId: 'course',
        topic: 'module-1',
        subContent: [{ title: 'Node modules', subTitle: 'Typescript', }, { title: 'MUI', subTitle: 'CSS Styles', }],
        isOpened: false,
    },
    {
        id: 3,
        contentId: 'course',
        topic: 'module-2',
        subContent: [{ title: 'MUI', subTitle: 'MUI Icons', }, { title: 'Typescript', subTitle: 'Interface' }],
        isOpened: false,
    },
    {
        id: 4,
        contentId: 'course',
        topic: 'module-3',
        subContent: [{ title: 'Redux', subTitle: 'Redux toolkit', }, { title: 'Context', subTitle: 'CreateContext' }],
        isOpened: false,
    },
    {
        id: 5,
        contentId: 'course',
        topic: 'module-4',
        subContent: [{ title: 'Formik', subTitle: 'Yup', }, { title: 'Swiper', subTitle: 'To Dragg' }],
        isOpened: false,
    },
    {
        id: 6,
        contentId: 'course',
        topic: 'module-5',
        subContent: [{ title: 'Google Maps API', subTitle: 'Maps', }, { title: 'Google Youtube API', subTitle: 'React Youtube' }],
        isOpened: false,
    },
    {
        id: 7,
        contentId: 'instructor',
        topic: 'Srikanth',
        subContent: [{ title: 'Typescript', subTitle: 'Type annotations', }, { title: 'Maps', subTitle: 'Google maps' }],
        isOpened: false,
    },
    {
        id: 8,
        contentId: 'instructor',
        topic: 'Praful',
        subContent: [{ title: 'Formik', subTitle: 'Formik, useFormik' }, { title: 'Swiper', subTitle: 'swiper' }],
        isOpened: false,
    },
    {
        id: 9,
        contentId: 'faq',
        topic: 'What are the interfaces are avaliable?',
        subContent: [{ title: 'IState, IProps', subTitle: '', },],
        isOpened: false,
    },
    {
        id: 10,
        contentId: 'faq',
        topic: 'How to style Textfield in MUI?',
        subContent: [{ title: 'Using Theme', subTitle: '', }],
        isOpened: false,
    },
    {
        id: 11,
        contentId: "skill",
        topic: 'Front End Development',
        subContent: [{ title: 'React Js', subTitle: '', }, { title: 'Type script', subTitle: '' }, { title: 'MUI', subTitle: '' }],
        isOpened: false,
    },
    {
        id: 12,
        contentId: "skill",
        topic: 'Web Development',
        subContent: [{ title: 'Typescript, MUI', subTitle: '', }, { title: 'Typescript', subTitle: '' }],
        isOpened: false,
    },
    {
        id: 13,
        contentId: "rating",
        topic: 'React js',
        subContent: [{ title: '7', subTitle: '', }],
        isOpened: false,
    },
    {
        id: 14,
        contentId: "rating",
        topic: 'Typescript, MUI',
        subContent: [{ title: '5', subTitle: '' }],
        isOpened: false,
    },
    {
        id: 15,
        contentId: "jobs",
        topic: 'Web Developer',
        subContent: [{ title: 'Front End', subTitle: '' }],
        isOpened: false,
    },
    {
        id: 16,
        contentId: "jobs",
        topic: 'Front End Developer',
        subContent: [{ title: 'React Js', subTitle: '' }],
        isOpened: false,
    },
    {
        id: 17,
        contentId: "students",
        topic: 'Batch - A',
        subContent: [{ title: '12', subTitle: '' }],
        isOpened: false,
    },
    {
        id: 18,
        contentId: "students",
        topic: 'Batch - B',
        subContent: [{ title: '11', subTitle: '' }],
        isOpened: false,
    },
]


function App() {
    return (
        <HomePage menusList={menusList} initialContentList={initialContentList} />
    );
}

export default App;

import '@fortawesome/fontawesome-free/css/all.css'
import Modal from "./components/Modal";
import IdeaForm from './components/ideaForm';
import IdeaList from './components/ideaList';
import './CSS/style.css';


const modal = new Modal();

const formModal = new  IdeaForm()

const ideaList = new IdeaList()


formModal.render()

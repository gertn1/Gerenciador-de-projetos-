import ProjectForm from '../project/ProjectForms';
import styles from './NewProject.module.css'



function NewProject(){
    return(
        <div className={styles.newproject_container}>
        <h1>Criar projeto</h1>
        <p>Criar seu projeto depois adicionar os serviços </p>
        <p>formulario</p>
        <ProjectForm btnText="Criar Projeto"/>
    </div>
    )
}

export default NewProject; 
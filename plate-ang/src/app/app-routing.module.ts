import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { ClasseComponent } from './classe/classe.component';
import { CoursComponent } from './cours/cours.component';
import { DepartementComponent } from './departement/departement.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MessageComponent } from './message/message.component';
import { QuizzComponent } from './quizz/quizz.component';
import { SectionComponent } from './section/section.component';
import { PublicationComponent } from './publication/publication.component';
import { DepartementSecComponent } from './departement-sec/departement-sec.component';

import { ProfilComponent } from './profil/profil.component';


import { CreatePublicationComponent } from './components/create-Publication/create-Publication.component';

import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { AboutComponent } from './about/about.component';
import { ProfilEnseignantComponent } from './profil-enseignant/profil-enseignant.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'enseignant', component: EnseignantComponent },
  {path: 'cours', component: CoursComponent },
  {path: 'classe/:id', component: ClasseComponent },
  {path: 'departement', component: DepartementComponent },
  {path: 'departementsec', component: DepartementSecComponent },
  {path: 'etudiant', component: EtudiantComponent },
  {path: 'matiere/:id', component: MatiereComponent },
  {path: 'message', component: MessageComponent },
  {path: 'quizz', component: QuizzComponent },
  {path: 'section/:id', component: SectionComponent },
  {path: 'publication', component: PublicationComponent },

  {path: 'profil', component: ProfilComponent },

  {path: 'profile', component: ProfilEnseignantComponent },



  { path: 'addp/:id', component: CreatePublicationComponent },

  { path: 'publist', component: PublicationListComponent },


  {path: 'about', component: AboutComponent },
  {path: 'register', component:RegisterComponent}










];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

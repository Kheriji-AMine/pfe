<?php

namespace App\Controller;

use App\Entity\Questions;
use App\Entity\Quizz;
use App\Form\QuestionsType;
use App\Repository\QuestionsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\QuizzRepository;

/**
 * @Route("/Questions")
 */
class QuestionsController extends AbstractController
{
    /**
     * @Route("/", name="Questions_index", methods={"GET"})
     */
    public function index(QuestionsRepository $QuestionsRepository): Response
    {
        return $this->render('Questions/index.html.twig', [
            'Questions' => $QuestionsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="Questions_new", methods={"GET","POST"})
     */
    public function new(Request $request,QuizzRepository $QuizzRepository): Response{
        
        $Question = new Questions();
        if  ($request->isMethod('POST'))
        
        {

            $choix1=$request->request->get('choix1');
            $choix2=$request->request->get('choix2');
            $choix3=$request->request->get('choix3');
            $choix = $choix1.";".$choix2.";".$choix3;
    $titre = $request ->request->get('titre');

    $reponse = $request ->request->get('reponse');
    $Quizzid = $request ->request->get('Quizz');
    $Quizz = $this->getDoctrine()
    ->getRepository(Quizz::class)
    ->find($Quizzid);
   
        
        $Question -> setTitre( $titre);
        $Question ->setChoix($choix);
        $Question ->setReponse($reponse);
        $Question ->setQuizz($Quizz);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($Question);
        

            // actually executes the queries (i.e. the INSERT query)
            
            $entityManager->flush();
    
            return $this->redirectToRoute('Questions_index');

        }
        $form=$this->createForm(QuestionsType::class ,$Question);
        $form->handleRequest ( $request);
        return $this->render('Questions/new.html.twig', [
            'Question' => $Question,
            'Quizz' => $QuizzRepository->findAll(),
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="Questions_show", methods={"GET"})
     */
    public function show(Questions $Question): Response
    {
        return $this->render('Questions/show.html.twig', [
            'Question' => $Question,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="Questions_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Questions $Question): Response
    {
        $form = $this->createForm(QuestionsType::class, $Question);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('Questions_index');
        }

        return $this->render('Questions/edit.html.twig', [
            'Question' => $Question,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="Questions_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Questions $Question): Response
    {
        if ($this->isCsrfTokenValid('delete'.$Question->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($Question);
            $entityManager->flush();
        }

        return $this->redirectToRoute('Questions_index');
    }

}

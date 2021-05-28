<?php

namespace App\Entity;

use App\Repository\QuestionsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=QuestionsRepository::class)
 */
class Questions
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $choix;

    /**
     * @ORM\Column(type="text")
     */
    private $reponse;

    /**
     * @ORM\ManyToOne(targetEntity=Quizz::class, inversedBy="Questions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Quizz;

    public function __toString(){
        return $this->titre;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getChoix(): ?string
    {
        return $this->choix;
    }

    public function setChoix(?string $choix): self
    {
        $this->choix = $choix;

        return $this;
    }

    public function getReponse(): ?string
    {
        return $this->reponse;
    }

    public function setReponse(string $reponse): self
    {
        $this->reponse = $reponse;

        return $this;
    }

    public function getQuizz(): ?Quizz
    {
        return $this->Quizz;
    }

    public function setQuizz(?Quizz $Quizz): self
    {
        $this->Quizz = $Quizz;

        return $this;
    }
    
}

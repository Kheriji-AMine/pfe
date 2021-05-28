<?php

namespace App\Entity;

use App\Repository\QuizzRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=QuizzRepository::class)
 */
class Quizz
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titre;

    /**
     * @ORM\OneToMany(targetEntity=Questions::class, mappedBy="Quizz")
     */
    private $Questions;

    public function __construct()
    {
        $this->Questions = new ArrayCollection();
    }
    
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

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * @return Collection|Questions[]
     */
    public function getQuestions(): Collection
    {
        return $this->Questions;
    }

    public function addQuestion(Questions $Question): self
    {
        if (!$this->Questions->contains($Question)) {
            $this->Questions[] = $Question;
            $Question->setQuizz($this);
        }

        return $this;
    }

    public function removeQuestion(Questions $Question): self
    {
        if ($this->Questions->removeElement($Question)) {
            // set the owning side to null (unless already changed)
            if ($Question->getQuizz() === $this) {
                $Question->setQuizz(null);
            }
        }

        return $this;
    }
}

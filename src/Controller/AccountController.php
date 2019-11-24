<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class AccountController extends AbstractController
{
    /**
     * @Route("/Compte", name="account.index")
     * @return Response
     */
    public function index(): Response
    {

        return $this->render("account/account.html.twig");

    }

}

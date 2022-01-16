import { Injectable } from "@angular/core";

@Injectable ()

export class PostService {
  posts: Array<{ id: number, name: string, url: string, desc: string}> = [
    {
      name: 'Title 1',
      id: 1,
      url: 'assets/doberman.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, neque quia quo quam quas ut dolorum id nesciunt possimus voluptatum doloribus quaerat et, architecto distinctio rem nihil odit.',
    },
    {
      name: 'Title 2',
      id: 2,
      url: 'assets/doberman.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, neque quia quo quam quas ut dolorum id nesciunt possimus voluptatum doloribus quaerat et, architecto distinctio rem nihil odit.',
    },
    {
      name: 'Title 3',
      id: 3,
      url: 'assets/doberman.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, neque quia quo quam quas ut dolorum id nesciunt possimus voluptatum doloribus quaerat et, architecto distinctio rem nihil odit.',
    },
    {
      name: 'Title 4',
      id: 4,
      url: 'assets/doberman.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, neque quia quo quam quas ut dolorum id nesciunt possimus voluptatum doloribus quaerat et, architecto distinctio rem nihil odit.',
    },
    {
      name: 'Title 5',
      id: 5,
      url: 'assets/doberman.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, neque quia quo quam quas ut dolorum id nesciunt possimus voluptatum doloribus quaerat et, architecto distinctio rem nihil odit.',
    },
    {
      name: 'Title 6',
      id: 6,
      url: 'assets/doberman.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, neque quia quo quam quas ut dolorum id nesciunt possimus voluptatum doloribus quaerat et, architecto distinctio rem nihil odit.',
    }
  ]
}

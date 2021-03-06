import { gql } from "@apollo/client";

export const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const REGISTRATION_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export const ADD_NOTE = gql`
  mutation newNote($anons: String!, $content: String!) {
    newNote(anons: $anons, content: $content) {
      id
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

export const SET_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $anons: String!, $content: String!) {
    updateNote(id: $id, anons: $anons, content: $content) {
      id
      content
      anons
    }
  }
`;

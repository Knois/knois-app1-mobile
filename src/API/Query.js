import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query notes {
    notes {
      id
      createdAt
      updatedAt
      content
      anons
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

export const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      anons
      createdAt
      updatedAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

export const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
      notes {
        id
        createdAt
        updatedAt
        anons
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

export const GET_MY_FAVORITES = gql`
  query me {
    me {
      id
      username
      favorites {
        id
        createdAt
        updatedAt
        anons
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

import React from 'react'
interface Props {
    id : string | number,
    path: string
}

const fetchById: React.FC<Props> = async({id , path}: Props) => {
        const API_URL = process.env.API_URL;
      
        try {
          const res = await fetch(`${API_URL}${path}/${id}`, {
            cache: "no-store",
          });
      
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
      
          return res.json();
        } catch (error) {
          console.error(error);
        }
}

export default fetchById


SELECT * 
FROM "users"
WHERE (
    "username" = ${username},
    "password" = ${password}
)
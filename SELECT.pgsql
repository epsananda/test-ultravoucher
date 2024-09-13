SELECT 
    p1.id,
    p1.name,
    p2.name AS parent_name
FROM persons p1
LEFT JOIN persons p2
    ON p1.parent_id = p2.id;

# Вытеснение элементов на сетке
### Задание
Есть сетка в виде двумерного массива 4x4. На этой сетке располагаются 10 элементов.
Активный элемент (на который навели курсор) занимает 6 ячеек (3x2). Неактивные элементы занимают по одной ячейке. И особый элемент 2 клеточки по вертикали когда он неактивен.
Смена состояния элементов происходит при наведении на неактивные элементы. При наведении на неактивный элемент, он превращается в большой элемент из шести клеток. Элемент который был активен уменьшается. Остальные элементы смещаются на свободные позиции.
### Цель
При наведении на неактивный элемент сделать его активным и расположить на шесть клеток, а элементы которые он вытеснил раскидать по свободным позициям (которые освободил предыдущий активный элемент, ставший неактивным).

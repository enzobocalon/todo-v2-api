import { Router } from 'express';
import ActivityController from './app/Controllers/ActivityController';

export const router = Router();

// Show All Todos
router.get('/', ActivityController.index);

// Create a Todo
router.post('/', ActivityController.store);

// Update a todo
router.patch('/:id', ActivityController.update);

// Delete a Todo
router.delete('/:id', ActivityController.delete);

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Difficulty } from '../../lib/enums';
import { Category } from '../../lib/definitions';
import { useEffect } from 'react';

const schema = z.object({
  difficulty: z.string().min(1, { message: 'Please pick a valid difficulty' }),
  category: z.coerce
    .number()
    .min(1, { message: 'Please pick a valid category' }),
});

const PlayForm = ({
  submitForm,
  categories,
}: {
  submitForm: (data: { difficulty: string; category: number }) => void;
  categories: Category[];
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { difficulty: 'EASY', category: 9 },
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label htmlFor="difficultyInput">Difficulty: </label>
        <select id="difficultyInput" {...register('difficulty')}>
          {Object.values(Difficulty)
            .filter((difficulty) => typeof difficulty === 'string')
            .map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
        </select>
        {errors.difficulty?.message && <p>{errors.difficulty?.message}</p>}
      </div>
      <div>
        <label htmlFor="categoryInput">Category</label>
        <select id="categoryInput" {...register('category')}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">Play</button>
      </div>
    </form>
  );
};

export default PlayForm;

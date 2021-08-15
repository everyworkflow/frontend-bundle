<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\FrontendBundle;

use EveryWorkflow\FrontendBundle\DependencyInjection\FrontendExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class EveryWorkflowFrontendBundle extends Bundle
{
    public function getContainerExtension()
    {
        return new FrontendExtension();
    }
}
